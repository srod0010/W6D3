const APIUtil = require('./api_util.js');


class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.followState = this.$el.data('initial-follow-state');
        this.userId = this.$el.data('user-id');
        this.render();
    }

    render() {
        if (this.followState === 'unfollowed') {
            this.$el.text('Follow!');
            this.$el.prop('Disabled', false);

        } else if (this.followState === 'followed') {
            this.$el.text('Unfollow!');
            this.$el.prop('Disabled', false);
        } else if (this.followState === 'following') {
            this.$el.text('Following!');
            this.$el.prop('Disabled', true);
        } else if (this.followState === 'unfollowing') {
            this.$el.text('Unfollowing!');
            this.$el.prop('Disabled', true);
        }
    }

    handleClick() {
        const followToggle = this;
    }
}