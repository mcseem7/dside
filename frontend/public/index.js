var Logo = {

    $logoFillArea: null,
    imageIds: [],
    imageCount: 2,
    assetBase: 'https://quest.masons.pl/',

    init: function() {
        // Bind hover events

        this.$logoFillPattern = $('#rollover-image');
        this.mixImages();
        this.applyImage();

        $('.svg-logo').mouseleave(function() {
            Logo.applyImage();
        })
    },

    mixImages: function() {
        this.imageIds = _.shuffle(_.range( 1, this.imageCount + 1));
    },

    applyImage: function() {

        if( this.imageIds.length === 0 ) {
            this.mixImages();
        }

        var imageUrl = this.assetBase + this.imageIds[0] + '.gif';
        this.$logoFillPattern.attr('xlink:href', imageUrl);

        this.imageIds.shift();
    }
}

Logo.init();


