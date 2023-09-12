function post() {
    alert('post function')

    var formData = new FormData();

    alert('created form data')

    //to add variables to the form, add it like this
    formData.append("body", "Hello TVii")

    alert('appending works now (i just appended the body, so all following should work)')

    formData.append("topic_tag", "Topic Tag Test")
    formData.append("search_key", "TemplateShow")
    formData.append("app_data", "")
    formData.append("community_id", "0")
    formData.append("feeling_id", "1")
    formData.append("is_autopost", "1")
    formData.append("is_spoiler", "0")
    formData.append("language_id", "1")
    formData.append("is_app_jumpable", "0")
    //you can do this as many times as you want

    alert('appended form data (thats good)')

    var request = new XMLHttpRequest();
    alert('created xhr')
    request.open("POST", "https://olvapi.nonamegiven.xyz/v1/posts")
    alert('opened xhr request to POST to the api')
    request.setRequestHeader('x-nintendo-servicetoken', vino.olv_getServiceToken().toString())
    alert(vino.olv_getParameterPack().toString())
    request.setRequestHeader('x-nintendo-parampack', vino.olv_getParameterPack().toString())
    alert('set parampack header')
    alert('sending xhr')
    //sending form data
    request.send(formData)

    alert('sent xhr request')

    alert(request.statusText)
}