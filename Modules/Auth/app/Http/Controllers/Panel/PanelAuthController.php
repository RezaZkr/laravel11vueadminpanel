<?php

namespace Modules\Auth\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\User\Models\User;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class PanelAuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::query()->where('email', $request->input('email'))->first();
        $credentials = $request->only('email', 'password');
        if ($user && auth('admin')->attempt($credentials)) {
            return response()->success();
        }
        return response()->error(message: trans('auth::general.message.credential_not_match'), status: ResponseAlias::HTTP_UNAUTHORIZED);
    }
}
