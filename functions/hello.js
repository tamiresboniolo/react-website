exports.handler = async function(event, context){
    return {
        // http response status - 200 successful
        statusCode:200, 
        body:'Hello world'
    }
}