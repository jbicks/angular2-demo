
export const Environment = {
    baseUrl: 'http://localhost:2000/api/rest/v1/',
    apiKey: '157f8bd9-1e68-4f41-baf6-c94c2171a4df',
    endpoints: {
      authenticate: 'authenticate?username={USERNAME}&password={PASSWORD}&privateKey={PRIVATE_KEY}',
      userDetails: 'mydetails',
      getLanguages: 'languages',
      getCourses:'courses',
      getTerms: 'languages/{LANGUAGE_ID}/terms'
    }
}
