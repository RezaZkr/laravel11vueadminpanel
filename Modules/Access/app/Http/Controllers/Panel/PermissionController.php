<?php

namespace Modules\Access\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Access\Models\Permission;
use Modules\Access\Transformers\PermissionResource;
use Faker\Factory as Faker;

class PermissionController extends Controller
{
    public function index(Request $request)
    {
//        $faker = Faker::create();
//        foreach ([1,2,3,4,5] as $item) {
//            Permission::query()->create([
//                'group'      => 'option',
//                'name'       => $faker->company,
//                'guard_name' => 'panel',
//            ]);
//       }


        $query = Permission::query();//->panelGuard()
        if ($request->query('search')) {
            $query->whereRaw('lower(name) like (?)', ["%{$request->string('search')->lower()}%"]);
        }
        return $query->orderBy('group')->get()->groupBy('group');
    }

}
