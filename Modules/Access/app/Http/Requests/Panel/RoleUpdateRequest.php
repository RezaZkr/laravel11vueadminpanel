<?php

namespace Modules\Access\Http\Requests\Panel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoleUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required','string',Rule::unique('roles','name')->ignore($this->route()->parameter('role'))],
            'permissions' => ['required','array'],
            'permissions.*' => ['required','numeric','exists:permissions,id'],
        ];
    }
}
