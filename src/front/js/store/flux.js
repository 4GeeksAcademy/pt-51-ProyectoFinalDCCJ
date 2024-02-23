const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login_user: async (email, password) => {
				try {
					let response = await fetch(BACKEND_URL + "/api/login/user", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
					if (response.ok) {
						let data = await response.json();
						// Do something with the profile data if needed
						localStorage.setItem("token", data.access_token);
						console.log(data);
						return true;
					} else {
						// Handle non-OK response status
						console.log(`Error: ${response.status}`);
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			login_doctor: async (email, password) => {
				try {
					let response = await fetch(BACKEND_URL + "/api/login/doctor", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
					if (response.ok) {
						let data = await response.json();
						// Do something with the profile data if needed
						localStorage.setItem("token", data.access_token);
						console.log(data);
						return true;
					} else {
						// Handle non-OK response status
						console.log(`Error: ${response.status}`);
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			crear_usuario: async (email, password, nombre, apellido, direccion, telefono, dni) => {

				try {
					let response = await fetch(BACKEND_URL + "/api/usuario", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password,
							"nombre": nombre,
							"apellido": apellido,
							"direccion": direccion,
							"telefono": telefono,
							"dni": dni,

						})
					});

					if (response.ok) {
						let data = await response.json();

						console.log("Usuario creado correctamente:", data);
						return true;
					} else {
						console.error("Error al crear usuario:", data.error);
						console.log(`Error: ${response.status}`);
						return false;
					}

				} catch (error) {
					console.error("Error de red:", error);
					return false;
				}
			},
			obtenerEspecialidades: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/especialidades")
					const date = await response.json()
					setStore({ especialidades: data.Especialidades })

					return data;
				} catch (error) {

				}
			}
		}
	}
};

export default getState;
