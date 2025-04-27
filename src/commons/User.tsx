import { getCurrentUser } from 'aws-amplify/auth';

export async function getCognitoToken() {
  // currentSession levanta la sesión del usuario ya autenticado
  const session =  getCurrentUser;
  // ID Token = usuario / Access Token = scopes (elige el que tu authorizer espere)
  return session
}
