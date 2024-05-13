<?php

namespace Modules\Auth\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\User\Models\User;
use Modules\User\Transformers\UserResource;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = auth('panel')->attempt($credentials)) {
            $user = auth('panel')->user();
            return UserResource::make($user)->additional([
                'data' => [
                    'access_token' => $token,
                    'expire'       => ((int)config('jwt.ttl')) * 60,//min to sec
                ]
            ]);
        }
        return response()->error(message: trans('auth::general.message.credential_not_match'), status: ResponseAlias::HTTP_UNAUTHORIZED);
    }

    public function logout()
    {
        auth('panel')->logout();
        return response()->success();
    }
}
