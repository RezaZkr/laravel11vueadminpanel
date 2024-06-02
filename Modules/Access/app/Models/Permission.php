<?php

namespace Modules\Access\Models;

use Spatie\Permission\Models\Permission as SpatiePermissionModel;
use Illuminate\Database\Eloquent\Builder;


class Permission extends SpatiePermissionModel
{
    public function scopePanelGuard(Builder $query): void
    {
        $query->where('guard_name','=','panel');
    }
}
