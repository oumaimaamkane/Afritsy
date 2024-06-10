<?php

namespace App\Http\Controllers\Api\Crud;

use App\Http\Controllers\Controller;
use App\Models\Pays;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/api/pays",
     *     tags={"Pays"},
     *     summary="List all pays",
     *     description="Get a list of all pays.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Country name"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function index()
    {
        $pays = Pays::all();
        return response()->json([
            'status' => true,
            'data' => $pays
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *     path="/api/pays",
     *     tags={"Pays"},
     *     summary="Create a new pay",
     *     description="Create a new pay.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"name"},
     *                 @OA\Property(property="name", type="string", example="Country name"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Successful operation",
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
            'image' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $pay = Pays::create($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Pay created successfully',
            'data' => $pay
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *     path="/api/pays/{id}",
     *     tags={"Pays"},
     *     summary="Display a specific pay",
     *     description="Display the details of a specific pay.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the pay to retrieve",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Pay not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function show($id)
    {
        $pay = Pays::find($id);

        if (!$pay) {
            return response()->json([
                'status' => false,
                'message' => 'Pay not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $pay
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OA\Put(
     *     path="/api/pays/{id}",
     *     tags={"Pays"},
     *     summary="Update a pay",
     *     description="Update the details of a specific pay.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the pay to update",
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
     *                 required={"name"},
     *                 @OA\Property(property="name", type="string", example="Country name"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Pay not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function update(Request $request, $id)
    {
        $pay = Pays::find($id);

        if (!$pay) {
            return response()->json([
                'status' => false,
                'message' => 'Pay not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $pay->update($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Pay updated successfully',
            'data' => $pay
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @OA\Delete(
     *     path="/api/pays/{id}",
     *     tags={"Pays"},
     *     summary="Delete a specific pay",
     *     description="Delete a specific pay from the system.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the pay to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Pay deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Pay not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function destroy($id)
    {
        $pay = Pays::find($id);

        if (!$pay) {
            return response()->json([
                'status' => false,
                'message' => 'Pay not found'
            ], 404);
        }

        $pay->delete();

        return response()->json([
            'status' => true,
            'message' => 'Pay deleted successfully'
        ]);
    }
}
