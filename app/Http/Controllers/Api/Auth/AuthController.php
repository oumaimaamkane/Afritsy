<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Login a user.
     *
     * @OA\Post(
     *     path="/api/auth/login",
     *     tags={"Authentication"},
     *     summary="Login a user",
     *     description="Login a user with email and password.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                 @OA\Property(property="password", type="string", example="password"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User logged in successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="token", type="string", example="JWT_TOKEN"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Validation error or user not found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=false),
     *             @OA\Property(property="errors", type="object"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Invalid credentials"),
     *         )
     *     )
     * )
     */
    public function login(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);

        // Return validation errors if validation fails
        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "errors" => $validator->errors()
            ], 400);
        }

        // Attempt to authenticate user
        if (Auth::attempt($request->only('email', 'password'))) {
            // Retrieve authenticated user
            $user = Auth::user();
            // Create token for the authenticated user
            $token = $user->createToken('auth_token')->plainTextToken;

            // Return success response with user details and token
            return response()->json([
                "status" => true,
                "user" => $user,
                "token" => $token
            ], 200);
        } else {
            // Return failure response for invalid credentials
            return response()->json([
                "status" => false,
                "message" => "Invalid credentials"
            ], 401);
        }
    }

    /**
     * Logout a user.
     *
     * @OA\Post(
     *     path="/api/auth/logout",
     *     tags={"Authentication"},
     *     summary="Logout a user",
     *     description="Logout the currently authenticated user.",
     *     @OA\Response(
     *         response=200,
     *         description="User logged out successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="User successfully logged out"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthenticated",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Unauthenticated"),
     *         )
     *     )
     * )
     */
    public function logout(Request $request)
    {
        // Delete the current access token of the authenticated user
        $request->user()->currentAccessToken()->delete();

        // Return success response for logout
        return response()->json([
            'status' => true,
            'message' => "User successfully logged out"
        ], 200);
    }
}
