const API_BASE = "http://127.0.0.1:8000"; // Backend URL
 export async function registerUser(username, password, email) {
  // Register user
  const response = await fetch(`${API_BASE}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    })
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export async function loginUser(username, password) {
  // Login user
  const response = await fetch(`${API_BASE}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  });
  const data = await response.json();
  console.log(data);

  if(response.ok)
  {
    const token = data.token;
    localStorage.setItem('authToken', token);

  }else{
    console.error('Error logging in user', data);
    throw new Error(data.error || 'Error logging in user');
  }

}

export async function logoutUser() {
    const token = localStorage.getItem("authToken");
    console.log("Token used for logout:", token);


    if (!token) {
        console.error("No token found. User is not logged in.");
        return;
    }

    const response = await fetch("http://127.0.0.1:8000/logout/", {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        localStorage.removeItem("authToken"); // Remove token from local storage
        console.log("Logout successful!");
    } else {
        console.error("Failed to log out.");
    }
}
