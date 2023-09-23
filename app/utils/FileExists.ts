function fileExists(url: string) {
  const http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status !== 404;
}
