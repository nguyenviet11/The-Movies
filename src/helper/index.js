const linkTheMoviesDB = 'https://www.themoviedb.org';
export const customLinkImage = (width, height, description, path) => {
    return `${linkTheMoviesDB}/t/p/w${width}_and_h${height}_${description}/${path}`
    // https://www.themoviedb.org/t/p/w180_and_h180_face/qV2xYw8lS0KQRrdKalvIgMgUOKi.jpg
    // https://www.themoviedb.org/t/p/w276_and_h350_face/i6fbYNn5jWA6swWtaqgzaj02RMc.jpg
    // https://www.themoviedb.org/t/p/w440_and_h660_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg
    // https://www.themoviedb.org/t/p/w188_and_h282_bestv2/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg
    // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg
    // https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg
    // https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg
    // https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg
    // https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/r2NcIZ1FPMlxCty3vRITVTgGNVS.jpg
}