class ApiService {
  
  public baseApiUrl = '';

  constructor() {

  }

  public get() {
    return Promise.resolve({});
  }

}

export const apiService = new ApiService();