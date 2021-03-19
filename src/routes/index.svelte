<script>
    import Fa from "svelte-fa";
    import { faFacebook } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
    <title>Earth & Walls</title>
</svelte:head>
<section>
    <div class="element">
        <img src="logo-full.png" alt="logo" />

        <p>
            <Fa icon={faFacebook} size="2x" color="#304050" />
            <a href="https://www.facebook.com/Gipszkartonozom" target="_blank"
                >facebook/earthandwalls</a
            >
        </p>
        <p>
            <Fa icon={faEnvelope} size="2x" color="#304050" />
            <a href="mailto:earthandwalls@gmail.com">earthandwalls@gmail.com</a>
        </p>
    </div>
</section>

<style>
    section {
        display: flex;
        background-image: url("/images/bg_image_v1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        align-items: center;
    }

    img {
        height: 50vh;
    }

    .element {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: rgb(169, 187, 209); */
        justify-content: center;
        align-items: center;
        min-height: 33%;
    }
    p {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a {
        color: #304050;
        text-decoration: none;
        font-size: 2rem;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
