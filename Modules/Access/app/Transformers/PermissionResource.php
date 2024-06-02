<?php

namespace Modules\Access\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PermissionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'group'              => $this->group,
            'guard_name'              => $this->guard_name,
            'created_at'        => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
