const isTokenExpired = (token:string) => {
    const parseJwt = (token:string) => {
        try {
          return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
          return null;
        }
      };
    const decodedJwt = parseJwt(token);
    return (decodedJwt.exp * 1000 > Date.now()) ? true : false;
}

export default isTokenExpired