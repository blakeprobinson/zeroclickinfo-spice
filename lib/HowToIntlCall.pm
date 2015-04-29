package DDG::Spice::HowToIntlCall;
# ABSTRACT: Returns package information from npm package manager's registry.

use DDG::Spice;

triggers startend => 'how to call';

spice to => 'http://api.xmltime.com/dialcode?version=2&accesskey=9pJS6XHvna&signature=bV7Zsg8Yw%2BbYEkXns8MTHNUBkd4%3D&callback={{callback}}&$1';

# may need country to code package to turn country into number for request.

handle remainder => sub {
	return $_ if $_;
    return;
};

1;