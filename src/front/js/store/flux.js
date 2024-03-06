import { ToastContainer, toast } from 'react-toastify';
import React from 'react';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			Usuario: [],
			Doctores: [],
			Especialidades:[],
			HomeDoctores:[],
			HomeEspecialidades:[],
			authDoctor:false,
			authUsuario:false


		},
		actions: {
			//Use getActions to call a function within a fuction
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
					//console.log("Error loading message from backend", error)
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
			LoginUser: async (email, password) => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/login/user", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
					
					let data = await response.json();
					if (response.ok) {
						// Do something with the profile data if needed
						localStorage.setItem("token", data.access_token);
						setStore({authUsuario:true})
						
						toast.success('Usuario autenticado correctamente', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});

						return true;
					} else {
						console.log("Error al autenticar al usuario:", response.statusText);
						console.log(`Error: ${response.status}`);
						toast.error('Error al autenticar al Doctor. Verifica tus credenciales.', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			LoginDoctor: async (email, password) => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/login/doctor", {
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
						setStore({authDoctor:true})
						
						toast.success('Doctor autenticado correctamente', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});

						return true;
					} else {
						console.log("Error al autenticar al Doctor:", response.statusText);
						console.log(`Error: ${response.status}`);
						toast.error('Error al autenticar al Doctor. Verifica tus credenciales.', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						return false;
					}
				} catch (error) {
					console.error("Error en la autenticación:", error);
					return false;
				}
			},
			
			CrearUsuario: async (email, password, nombre, apellido, telefono, direccion, dni, Url_imagen) => {
			
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/usuario", {
					
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email,
							password,
							nombre,
							apellido,
							direccion,
							telefono:parseInt(telefono),
							dni,
							Url_imagen
						}),
					});
					let data = await response.json();
					
					if (response.ok) {
						// let data = await response.json();
						console.log("Usuario creado correctamente:", data);
						toast.success('Registro exitoso', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						return true;
					} else {
						
						toast.error('Cliente no se pudo crear. Verifica tus credenciales.', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						return false;
					}
				} catch (error) {
					console.error("Error de red:", error);
				
					return false;
				}
			},


			CrearDoctor: async (email, password, nombre, apellido, telefono, dni, Url_imagen, url_Calendly) => {
			
				
				// await actions.CrearDoctor(email, password, nombre, apellido, telefono, dni, especialidad, Url_imagen, url_Calendly)
				try {
					
					
					let response = await fetch(process.env.BACKEND_URL + "/api/doctor", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email,
							password,
							nombre,
							apellido,
							telefono,
							dni,
							url_Calendly,
							Url_imagen
						}),
					});

					if (response.ok) {

						let data = await response.json();
						console.log("Doctor creado correctamente:", data);
						 toast.success('Creado doctor correctamente', {
										position: "top-right",
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
										theme: "colored",
									});
						return true;
					} else {
						console.error("Error al crear el Doctor:", response.statusText);
						console.log(`Error: ${response.status}`);
						toast.error('Doctor no se pudo crear. Verifica tus credenciales.', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						return false;
					}
				} catch (error) {
					console.error("Error de red:", error);
				
					return false;
				}
			},
			ObtenerDoctores: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/doctores")
					const data = await response.json()
					setStore({ Doctores: data.doctores })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					//console.log("Error loading message from backend", error)
				}
			},
			ObtenerUsuarios: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/usuarios")
					const data = await response.json()
					console.log("Data from backend:", data);
					setStore({ Usuario: data.usuarios });
					// don't forget to return something, that is how the async resolves
					
					return data;
				} catch (error) {
					//console.log("Error loading message from backend", error)
				}
			},
			DoctoresHome: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/info/doctores/especialidades")
					const data = await response.json()
					console.log("Data from backend:", data);
					setStore({ Doctores: data.doctores });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					//console.log("Error loading message from backend", error)
				}
			},
			EspecialidadesHome: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/info/doctores/especialidades")
					const data = await response.json()

					console.log("Respuesta del backend:", data);
					setStore({ Especialidades: data.especialidades })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					//console.log("Error loading message from backend", error)
				}
			},

			changePassword: async (email, password, newpassword) => {
				console.log(email, password, newpassword)
				// try {
				// 	let response = await fetch(process.env.BACKEND_URL + "/api/login/user", {
				// 		method: "POST",
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		},
				// 		body: JSON.stringify({
				// 			"email": email,
				// 			"password": password
				// 		})
				// 	});
				// 	if (response.ok) {
				// 		let data = await response.json();
				// 		// Do something with the profile data if needed
				// 		localStorage.setItem("token", data.access_token);
				// 		console.log("Usuario autenticado correctamente:", data);

				// 		return true;
				// 	} else {
				// 		console.log("Error al autenticar al usuario:", response.statusText);
				// 		console.log(`Error: ${response.status}`);
				// 		return false;
				// 	}
				// } catch (error) {
				// 	console.log(error);
				// 	return false;
				// }
			},

			sendEmail: async (email) => {
				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/forgotpassword", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email
						})
					});
					let data = await response.json();
					if (response.status === 200) {
						console.log("Correo enviado correctamente:", data);
						return { success: true, message: data.msg };
					} else {
						console.log("Error al enviar el correo.", data);
						return { success: false, message: data.msg };
					}
				} catch (error) {
					console.log("Error en sendEmail:", error);
					return { success: false, message: "Debe ingresar el correo" };
				}
			},
		
			validate_token: async () => {
                let token = localStorage.getItem("token")
                if (token) {
                    try {
                        let response = await fetch(process.env.BACKEND_URL + "/api/validate_token", {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (response.status >= 200 && response.status < 300) {
                            await setStore({ authDoctor: true })
							await setStore({ authUsuario: true })
                            // await getActions().obtenerInfoUsuario()
                        }
                        else {
                            setStore({ authDoctor: false });
							setStore({ authUsuario: false });
                            localStorage.removeItem("token");
                        //    localStorage.removeItem("user");
                        //     localStorage.removeItem("email" );
                        //     localStorage.removeItem("id");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
			logout: () => {
				
				localStorage.removeItem("token");
				setStore({authDoctor:false});
				setStore({authUsuario:false});
				return false;
			},

















			
			



		}


        














	}
	

};
			<ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
        	/>

export default getState;