<?php

namespace Modules\Access\Models;

use Spatie\Permission\Models\Role as SpatieRoleModel;
use Illuminate\Database\Eloquent\Builder;


class Role extends SpatieRoleModel
{
    public function scopePanelGuard(Builder $query): void
    {
        $query->where('guard_name','=','panel');
    }
}
