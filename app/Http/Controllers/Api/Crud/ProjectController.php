<?php

namespace App\Http\Controllers\Api\Crud;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @OA\Get(
     *     path="/api/projects",
     *     tags={"Projects"},
     *     summary="List all projects",
     *     description="Get a list of all projects.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Project title"),
     *                 @OA\Property(property="description", type="string", example="Project description"),
     *                 @OA\Property(property="image", type="string", example="http://example.com/image.jpg"),
     *             )
     *         )
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *     path="/api/projects",
     *     tags={"Projects"},
     *     summary="Create a new project",
     *     description="Create a new project.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"title"},
     *                 @OA\Property(property="title", type="string", example="Project title"),
     *                 @OA\Property(property="description", type="string", example="Project description"),
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
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $project = Project::create($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Project created successfully',
            'data' => $project
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @OA\Get(
     *     path="/api/projects/{id}",
     *     tags={"Projects"},
     *     summary="Display a specific project",
     *     description="Display the details of a specific project.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the project to retrieve",
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
     *         description="Project not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */

    public function show($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OA\Put(
     *     path="/api/projects/{id}",
     *     tags={"Projects"},
     *     summary="Update a project",
     *     description="Update the details of a specific project.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the project to update",
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
     *                 required={"title"},
     *                 @OA\Property(property="title", type="string", example="Project title"),
     *                 @OA\Property(property="description", type="string", example="Project description"),
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
     *         description="Project not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */

    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 400);
        }

        $project->update($validator->validated());

        return response()->json([
            'status' => true,
            'message' => 'Project updated successfully',
            'data' => $project
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @OA\Delete(
     *     path="/api/projects/{id}",
     *     tags={"Projects"},
     *     summary="Delete a specific project",
     *     description="Delete a specific project from the system.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the project to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Project deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Project not found"
     *     ),
     *     security={{"api_key": {}}}
     * )
     */
    
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ], 404);
        }

        $project->delete();

        return response()->json([
            'status' => true,
            'message' => 'Project deleted successfully'
        ]);
    }
}
