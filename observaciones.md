Querida Rosy, 

Primero que nada felicitarte por un excelente trabajo. Como siempre, tu codigo esta prolijo, completo, bien hecho, demostrando preocupacion por buenas practicas. Y tu app es hermosa, con detalles cuidados, y buena experiencia de usuario. 

Con respecto al comportamiento, veo muy, muy bien la web. Seguis casi a la perfeccion el modelo, es facil navegar en la pagina y todo esta muy bien resuelto. Quiza el responsive necesite algo mas de atencion (la nav, por ejemplo, tiene un tamaño incomodo en celulares). Todo lo que te comento, obviamente, ya lo sabes: lo dejo como guia de lo mas urgente si en algun momento tenes ganas de volver a agarrar este TP. 

El detalle de la pelicula y de los actores es el momento mas complejo del TP y tambien donde mas problemas veo. Creo que encaraste de una manera mas compleja de la necesaria esos componentes, ya que cada sub-ruta se encarga del fetch y eso diifculta mucho que el componente padre pueda re-renderizar cuando la ruta cambia. Creo que seria mejor hacer que del fetch se ocupe el componente de mayor jerarquia, y que los demas reciban la info por props o via params. 

Con respecto al codigo, veo muy bien la organizacion de archivos. Usas bien styled components, los hooks, y la logica de React. Celebro ver que repetis muy poco codigo y que te preocupaste por hacer las cosas bien reutilizables. Un detalle: estas asumiendo que todos tus usuarios tienen Calibri (yo no la tengo en mi compu) por lo que muchos vamos a tener la tipografia rota en tu TP. 

En general hiciste un gran trabajo, Rosy, y me alegra muchisimo que concluyas tu aprendizaje con un trabajo de tanta calidad. Felicitaciones!

Nota final: 9
