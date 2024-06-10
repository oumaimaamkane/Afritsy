<?php

namespace App\Http\Controllers\Api\Crud;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/api/services",
     *     tags={"Services"},
     *     summary="List all services",
     *     description="Get a list of all services.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Service name"),
     *                 @OA\Property(property="description", type="string", example="Service description"),
     *             )
     *         )
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function index()
    {
        $services = Service::all();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *     path="/api/services",
     *     tags={"Services"},
     *     summary="Create a new service",
     *     description="Create a new service.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"name"},
     *                 @OA\Property(property="name", type="string", example="Service name"),
     *                 @OA\Property(property="description", type="string", example="Service description"),
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
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $service = Service::create($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Service created successfully',
            'data' => $service
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *     path="/api/services/{id}",
     *     tags={"Services"},
     *     summary="Display a specific service",
     *     description="Display the details of a specific service.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the service to retrieve",
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
     *         description="Service not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */

    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $service
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OA\Put(
     *     path="/api/services/{id}",
     *     tags={"Services"},
     *     summary="Update a service",
     *     description="Update the details of a specific service.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the service to update",
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
     *                 @OA\Property(property="name", type="string", example="Service name"),
     *                 @OA\Property(property="description", type="string", example="Service description"),
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
     *         description="Service not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */

    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $service->update($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Service updated successfully',
            'data' => $service
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @OA\Delete(
     *     path="/api/services/{id}",
     *     tags={"Services"},
     *     summary="Delete a specific service",
     *     description="Delete a specific service from the system.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the service to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Service deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Service not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    
    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        $service->delete();

        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}
