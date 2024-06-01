<?php

namespace Modules\Access\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'permissions_count' => $this->when(isset($this->permissions_count), $this->permissions_count),
            'created_at'        => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
