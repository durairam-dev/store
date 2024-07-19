function getFirstPathFromCurrentUrl() {
  // Get the current URL
  let currentUrl = window.location.href;

  // Use the URL API to parse the URL
  let url = new URL(currentUrl);

  // Get the pathname from the URL
  let pathname = url.pathname;

  // Remove leading slash if present
  if (pathname.startsWith("/")) {
    pathname = pathname.substring(1);
  }

  // Get the first path segment
  let firstPath = pathname.split("/")[0];

  return firstPath;
}

export { getFirstPathFromCurrentUrl };
