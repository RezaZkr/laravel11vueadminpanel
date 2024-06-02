<?php

namespace Modules\Access\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\Access\Http\Requests\Panel\RoleStoreRequest;
use Modules\Access\Http\Requests\Panel\RoleUpdateRequest;
use Modules\Access\Models\Role;
use Modules\Access\Transformers\RoleResource;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $query = Role::query()->panelGuard();
        if ($request->query('search')) {
            $query->whereRaw('lower(name) like (?)', ["%{$request->string('search')->lower()}%"]);
        }
        $roles = $query->withCount('permissions')->orderBy('name')->paginate(10);
        return RoleResource::collection($roles);
    }

    public function show($role)
    {
        $role = Role::query()->with('permissions')->panelGuard()->findOrFail($role);
        return RoleResource::make($role);
    }

    public function store(RoleStoreRequest $request)
    {
        try {
            DB::beginTransaction();
            $role = Role::query()->create([
                'name'       => $request->input('name'),
                'guard_name' => 'panel',
            ]);
            $role->permissions()->attach($request->input('permissions'));
            DB::commit();
            return response()->success();
        } catch (\Exception $exception) {
            report($exception);
            DB::rollBack();
            return response()->error();
        }

    }

    public function update(RoleUpdateRequest $request, $role)
    {
        $role = Role::query()->with('permissions')->panelGuard()->findOrFail($role);
        try {
            DB::beginTransaction();
            $role->update([
                'name' => $request->input('name'),
            ]);
            $role->permissions()->sync($request->input('permissions'));
            DB::commit();
            return response()->success();
        } catch (\Exception $exception) {
            report($exception);
            DB::rollBack();
            return response()->error();
        }

    }

    public function destroy(Request $request, Role $role)
    {
        try {

            $role->delete();
            return response()->success();

        } catch (\Exception $exception) {
            report($exception);
            return response()->error();
        }

    }
}
