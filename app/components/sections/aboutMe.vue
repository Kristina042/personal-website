

<template>
    <div class="section">
        <div class="section__text">
            <div class="section__name">👋 Hi, I'm Christine</div>
                <div class="section__title">Software Engineer</div>
                <div class="section__description">I specialize in building fast, accessible, and visually polished web applications.
                    With a strong eye for detail and a passion for great design, I turn complex ideas into elegant,
                    user-friendly interfaces using modern technologies
            </div>
        </div>
        <img class="section__profile-picture" src="assets/profile.png"/>
    </div>
</template>



<style scoped lang="scss">

.section {
    color: white;
    display: flex;
    gap: 64px;

    &__text {
        display: flex;
        flex-direction: column;
        width: 465px;
    }

    &__name {
        font-family: 'Roboto Condensed';
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 5px;
    }

    &__title {
        font-family: 'Allerta Stencil';
        font-weight: 400;
        font-size: 24px;
        margin-bottom: 16px;
    }

    &__description {
        font-family: 'Roboto Condensed';
        font-weight: 400;
        font-size: 16px;
    }

    &__profile-picture {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        box-shadow: 0 0 25px rgba(#673AB7, 0.9);
    }
}

</style>