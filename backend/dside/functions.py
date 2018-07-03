def increment_view(request, instance):
    key = '1asdadsda1123{key}{name}s43qwos'.format(key=instance.id, name=instance.__class__.__name__)
    try:
        user = request.session[key]
    except KeyError:
        request.session[key] = 'v20b02v1bssda5bgvr7n34515vaq213j54ydfrwcc426b7'
        instance.views += 1
        instance.save()
        return True

    return False
