<?php

namespace App\Http\Controllers\Api\Crud;

use App\Http\Controllers\Controller;
use App\Models\Membre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MembreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/api/membres",
     *     tags={"Membres"},
     *     summary="List all membres",
     *     description="Get a list of all membres.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function index()
    {
        $membres = Membre::all();
        return response()->json([
            'status' => true,
            'data' => $membres
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *     path="/api/membres",
     *     tags={"Membres"},
     *     summary="Create a new membre",
     *     description="Create a new membre.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"name", "email"},
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Membre created successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Membre created successfully"),
     *             @OA\Property(property="data", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             ),
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:membres,email',
            'image' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $membre = Membre::create([
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'image' => $request->input('image'),
    ]);

        return response()->json([
            'status' => true,
            'message' => 'Membre created successfully',
            'data' => $membre
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *     path="/api/membres/{id}",
     *     tags={"Membres"},
     *     summary="Display a specific membre",
     *     description="Display the details of a specific membre.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the membre to retrieve",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Membre retrieved successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="data", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             ),
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Membre not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function show($id)
    {
        $membre = Membre::find($id);

        if (!$membre) {
            return response()->json([
                'status' => false,
                'message' => 'Membre not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $membre
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OA\Put(
     *     path="/api/membres/{id}",
     *     tags={"Membres"},
     *     summary="Update a membre",
     *     description="Update the details of a specific membre.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the membre to update",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"name", "email"},
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Membre updated successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Membre updated successfully"),
     *             @OA\Property(property="data", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             ),
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Membre not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function update(Request $request, $id)
{
    $membre = Membre::find($id);

    if (!$membre) {
        return response()->json([
            'status' => false,
            'message' => 'Membre not found'
        ], 404);
    }

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => [
            'required',
            'email',
            Rule::unique('membres')->ignore($membre->id),
        ],
        'image' => 'nullable|string',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()
        ], 400);
    }

    $membre->update($validator->validated());

    return response()->json([
        'status' => true,
        'message' => 'Membre updated successfully',
        'data' => $membre
    ], 200);
}

    /**
     * Remove the specified resource from storage.
     *
     * @OA\Delete(
     *     path="/api/membres/{id}",
     *     tags={"Membres"},
     *     summary="Delete a specific membre",
     *     description="Delete a specific membre from the system.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the membre to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Membre deleted successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="status", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Membre deleted successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Membre not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function destroy($id)
    {
        $membre = Membre::find($id);

        if (!$membre) {
            return response()->json([
                'status' => false,
                'message' => 'Membre not found'
            ], 404);
        }

        $membre->delete();

        return response()->json([
            'status' => true,
            'message' => 'Membre deleted successfully'
        ], 200);
    }
}
