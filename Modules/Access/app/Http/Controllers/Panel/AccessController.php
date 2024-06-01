<?php

namespace Modules\Access\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Access\Models\Role;
use Modules\Access\Transformers\RoleResource;

class AccessController extends Controller
{
    public function index(Request $request)
    {
        $query = Role::query();
        if ($request->query('search')) {
            $query->whereRaw('lower(name) like (?)', ["%{$request->string('search')->lower()}%"]);
        }
        $roles = $query->withCount('permissions')->orderBy('name')->paginate(10);
        return RoleResource::collection($roles);
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
