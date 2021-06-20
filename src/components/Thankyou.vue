<template>
  <div id="content" class="site-content position-relative" style="margin-top: 2rem">
    <div class="content-wrapper clear">
      <div id="primary" class="content-area" style="margin-left: 40px;">
        <main id="main" class="site-main" role="main">
          <article id="post-169" class="post-169 page type-page status-publish hentry">
            <div class="entry-content" v-if="card != null">
                <!-- <img src="../assets/img/thanks_template.png" alt="thanks" class="thanks_img"> -->
                <div class="thanks_content">
                    <p>Hi <strong>{{card.name}},</strong></p>
                    <p>Your WellCard has be created and emailed to the email address you provided. If you don't see the email in your Inbox, please check your Junk Mail/Spam folder.</p>
                    <!-- <p>Viewing your membership card:
                        <br>
                        <a :href="card.cardGeneratedUrl" target="_blank">{{card.cardGeneratedUrl}}</a>
                    </p> -->

                    <!-- <b-button squared variant="primary" size="lg" :href="card.cardGeneratedUrl" target="_blank">
                      Download Your Card
                    </b-button> -->
                </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thankyou',
  data () {
    return {
      card: JSON.parse(localStorage.getItem('cardInfo') || '')
    }
  }
}
</script>

<style scoped>
.position-relative {
    position: relative !important;
}

.thanks_content {
    width: 95%;
    margin-top: 1rem;
}

.thanks_img {
    position: absolute;
    width: 50%;
    right: 2%;
    top: 0;
    transform: skew(-5deg, 5deg);
}
</style>
