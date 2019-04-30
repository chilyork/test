<template>
    <div>
        <h1>User</h1>
        <p>uid={{uid}}, {{nationality}}</p>
        <p>$route.params.uid={{ $route.params.uid }}</p>
        <p>$route.params.uid={{ $route.params.nationality }}</p>
    </div>
</template>
<script>
export default {
    props: {
        uid: {
            type: String,
            default:undefined
        },
                nationality: {
            type: String,
            default:undefined
        },
    }
}
</script>
