
class DogProduct {
    constructor(category, brand, name, link, imageURL) {
        this.brand = brand;
        this.name = name;
        this.link = link;
        this.imageURL = imageURL;
        this.category = category;
    }
}

export const DOG_DATA = [
    new DogProduct("toys", "Kong", "Durable Flyer", "https://a.co/d/iubDCP5", "/dogs/images/kong_durable_flyer.png"),
    new DogProduct("toys", "ChuckIt!", "Paraflight Flyer", "https://a.co/d/iubDCP5", "/dogs/images/paraflight_flyer.JPG"),
    new DogProduct("leashes", "Auroth", "Bungee Leash", "https://a.co/d/iubDCP5", "/dogs/images/bungee_leash.JPG"),
    new DogProduct("collars", "Icefang", "Harness", "https://a.co/d/iubDCP5", "/dogs/images/tactical_harness.jpg"),
    new DogProduct("supplies", "ZPirates", "Dog Bowl Stand", "https://a.co/d/92VoZHy", "/dogs/images/dog_bowl_stand.jpg"),
    new DogProduct("supplies", "Coldest", "Dog Bowl", "https://a.co/d/hnuC6ex", "/dogs/images/coldest_dog_bowl.jpg"),
    new DogProduct("furniture", "Brindle", "Waterproof Bed", "https://a.co/d/8M4Cq0m", "/dogs/images/waterproof_bed.jpg"),
    new DogProduct("furniture", "Ameritex", "Waterproof Bed Cover", "https://a.co/d/88PjSqA", "/dogs/images/waterproof_bed_cover.jpg"),
    new DogProduct("grooming", "SleekEZ", "Deshedding Grooming Tool", "https://a.co/d/eY7vws6", "/dogs/images/sleekez_grooming_tool.jpg"),
    new DogProduct("food", "Hill's Science Diet", "Adult Sensitive Stomach & Skin Canned Dog Food", "https://a.co/d/ixMHhx9", "/dogs/images/hills_canned_salmonveg.jpg"),
    new DogProduct("food", "Hill's Science Diet", "Adult Dog Dry Food, Perfect Digestion", "https://a.co/d/c9pUG6I", "/dogs/images/hills_salmon_dry.jpg"),
    new DogProduct("food", "Hill's Science Diet", "d/d Food Sensitivities Potato & Salmon Formula Dry Dog Food", "https://a.co/d/0pSbleB", "/dogs/images/hills_potatosalmon_dry.jpg"),
    new DogProduct("health", "Zymox", "Otic Ear Solution with 1% Hydrocortisone", "https://a.co/d/g2JWBgA", "/dogs/images/zymox_ear.jpg"),
    new DogProduct("treats", "Pawstruck", "Peanut Butter Cow Hooves", "https://a.co/d/5lIH3lm", "/dogs/images/pbcowhooves.jpg"),
    new DogProduct("collars", "Xqpetlihal", "Dog Collar", "https://a.co/d/1wLoNEb", "/dogs/images/tactical_dog_collar.jpg"),
    new DogProduct("treats", "Full Moon", "Chicken Training Treats", "https://a.co/d/9oDoNP8", "/dogs/images/chicken_training_treats.jpg"),
    new DogProduct("health", "Gladog", "6 Inch Professional Large Cotton Buds for Dogs", "https://a.co/d/g4x4wie", "/dogs/images/cotton_qtips.jpg"),
    new DogProduct("health", "Burt's Bees", "Oatmeal Dog Shampoo", "https://a.co/d/4JvdXEY", "/dogs/images/oatmeal_dog_shampoo.jpg"),
    new DogProduct("toys", "Fireor", "Dog Squeaky Toys", "https://a.co/d/bB6TO8S", "/dogs/images/stufless_dog_squeaky.jpg"),
    new DogProduct("toys", "Mammoth Floss", "Rope Tug", "https://a.co/d/5VemZeB", "/dogs/images/rope_tug.jpg"),
    new DogProduct("toys", "Aqua Joe", "Sprinkler", "https://a.co/d/iMWDYTy", "/dogs/images/sprinkler.jpg"),
    new DogProduct("health", "Petlab", "Probiotics", "https://a.co/d/8o4cVWv", "/dogs/images/probiotics.jpg"),
    new DogProduct("health", "Gonicc", "Nail Clippers", "https://a.co/d/an7lpZc", "/dogs/images/nailclippers.jpg"),
    new DogProduct("treats", "Pork Chomps", "Munchy Sticks", "https://a.co/d/6r2kJMJ", "/dogs/images/munchysticks.jpg"),
    new DogProduct("collars", "Road ID", "Jingle Free ID tag", "https://a.co/d/f3Qthia", "/dogs/images/jingle_free_tags.jpg"),
    new DogProduct("leashes", "Lynxking", "Long Leash", "https://a.co/d/0rilrXM", "/dogs/images/long_leash.jpg"),
    new DogProduct("leashes", "Tractive", "GPS Tracker", "https://a.co/d/hW0QCXx", "/dogs/images/gps.jpg"),
    new DogProduct("training", "HoAoOo", "Training Clicker", "https://a.co/d/dshy5jN", "/dogs/images/training_clicker.jpg"),
    new DogProduct("training", "SportDOG", "Weighted Floatable Bumper", "https://a.co/d/2FnWByy", "/dogs/images/weighted_bumperfloat.jpg"),
    new DogProduct("health", "Musher's Secret", "Paw Wax", "https://a.co/d/flg39AJ", "/dogs/images/paw_wax.jpg"),
    new DogProduct("furniture", "Active Pets", "Car Seat Cover", "https://a.co/d/4vT6Kbp", "/dogs/images/carseat_cover.jpg"),
    new DogProduct("toys", "HuggleHounds", "Plush Baby Fox", "https://a.co/d/gSzO13e", "/dogs/images/plushy_dogbaby.jpg"),
    new DogProduct("health", "Frontline Plus", "Flea and Tick Prevention and Treatment", "https://a.co/d/74m8SzG", "/dogs/images/frontline_tickguard.PNG"),
    new DogProduct("collars", "FunTags", "Blaze Orange Reflective Dog Collar", "https://a.co/d/h3dAyvM", "/dogs/images/blaze_orange_dog_collar.jpg"),
    new DogProduct("collars", "Remifa", "Bandana", "https://a.co/d/6bQeTVz", "/dogs/images/dog_bandana.jpg"),
    new DogProduct("health", "Tri-Heart Plus", "Heartworm Prevention", "https://www.triheartplus.com/", "/dogs/images/triheart_large_dogs.png"),
    new DogProduct("toys", "Nature", "Stick", "https://www.southernliving.com/culture/pets/why-do-/dogs-carry-sticks-walks", "/dogs/images/Black-labrador-holding-big-stick-in-mouth.jpg"),
]




