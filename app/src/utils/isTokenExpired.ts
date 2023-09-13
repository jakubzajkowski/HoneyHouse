const isTokenExpired = (token:string | null) => {
    if (typeof token == null){
        return false
    }
    else{
      const parseJwt = (token:string) => {
        try {
          return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
          return null;
        }
      };
    const decodedJwt = parseJwt(token as string);
    if (decodedJwt){
      return (decodedJwt.exp * 1000 > Date.now()) ? true : false;
    }
    else{
      return false
    }
    }
}

export default isTokenExpired