const a = () => {
    try {
        console.log(error.message)
    }
    catch (error) {
        console.log(error.stack)
        console.log("message")
    }
    finally {
        console.log("hellooo")
    }
}
a();
  console.log("pk")