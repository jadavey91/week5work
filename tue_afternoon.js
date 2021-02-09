try {
    const password = "1234";
    let attemptedPassword = prompt ("Please enter the passeod!");

    if (password !== attemptedPassword) {
        throw new Error("Incorrect password!");
    }

} catch (err) {
    console.log("The password was incorrect");
    console.log(err);
    console.dir(err);
}