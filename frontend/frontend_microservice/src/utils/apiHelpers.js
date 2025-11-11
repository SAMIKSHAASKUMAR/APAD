// This file REPLACES the need for apiConfig.js
// It manages all API calls to all 3 services.

const API_BASE_URL = "/api"; // This is the "fake" prefix Nginx is looking for

/**
 * A helper function for making POST requests.
 * @param {string} service - 'user', 'project', or 'inventory'
 * @param {string} endpoint - The specific API endpoint (e.g., 'login', 'signup')
 * @param {object} body - The JSON body to send
 * @returns {Promise<{ok: boolean, data: any}>}
 */
async function postHelper(service, endpoint, body) {
  try {
    // This builds the URL, e.g., "/api/user/login"
    const response = await fetch(`${API_BASE_URL}/${service}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return { ok: response.ok, data: data };

  } catch (error) {
    console.error(`API call failed: ${service}/${endpoint}`, error);
    return { ok: false, data: { message: "Network error or server is down." } };
  }
}

/**
 * A helper function for making GET requests.
 * @param {string} service - 'user', 'project', or 'inventory'
 * @param {string} endpoint - The specific API endpoint (e.g., 'getProjects')
 * @returns {Promise<{ok: boolean, data: any}>}
 */
export async function getHelper(service, endpoint) {
  try {
    // This builds the URL, e.g., "/api/project/view"
    const response = await fetch(`${API_BASE_URL}/${service}/${endpoint}`);
    const data = await response.json();
    return { ok: response.ok, data: data };

  } catch (error) {
    console.error(`API call failed: ${service}/${endpoint}`, error);
    return { ok: false, data: { message: "Network error or server is down." } };
  }
}

// === POST EXPORTS ===

// This is the function your LoginPage.js uses
export const userPost = (endpoint, body) => {
  return postHelper("user", endpoint, body);
};

// This is the function your CreateProjectPage.js uses
export const projectPost = (endpoint, body) => {
  return postHelper("project", endpoint, body);
};

// This is the function your InventoryPage.js will use
export const inventoryPost = (endpoint, body) => {
  return postHelper("inventory", endpoint, body);
};


// === GET EXPORTS ===

export const userGet = (endpoint) => {
  return getHelper("user", endpoint);
};

// This is the function your ViewProjectPage.js will use
export const projectGet = (endpoint) => {
  return getHelper("project", endpoint);
};

// This is the function your InventoryPage.js will use
export const inventoryGet = (endpoint) => {
  return getHelper("inventory", endpoint);
};