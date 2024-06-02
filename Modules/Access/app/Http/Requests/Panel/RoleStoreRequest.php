<?php

namespace Modules\Access\Http\Requests\Panel;

use Illuminate\Foundation\Http\FormRequest;

class RoleStoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required','string','unique:roles,name'],
            'permissions' => ['required','array'],
            'permissions.*' => ['required','numeric','exists:permissions,id'],
        ];
    }
}
