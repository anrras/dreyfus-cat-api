import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = "live_OqThL8lhFKfgb9NAvzYrsjUvcLCOcA860pAEDleDvH1RDLHzZCFgjJnKqE6y9cgg"
  const authReq = req.clone({ headers: req.headers.set('x-api-key', `${apiKey}`) });
  return next(authReq);
};
