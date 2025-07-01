// Pokemon data for the first 20 Pokemon
const pokemonData = [
    { id: 1, name: 'Bulbasaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif' },
    { id: 2, name: 'Ivysaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif' },
    { id: 3, name: 'Venusaur', types: ['grass', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif' },
    { id: 4, name: 'Charmander', types: ['fire'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif' },
    { id: 5, name: 'Charmeleon', types: ['fire'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif' },
    { id: 6, name: 'Charizard', types: ['fire', 'flying'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif' },
    { id: 7, name: 'Squirtle', types: ['water'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif' },
    { id: 8, name: 'Wartortle', types: ['water'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif' },
    { id: 9, name: 'Blastoise', types: ['water'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif' },
    { id: 10, name: 'Caterpie', types: ['bug'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif' },
    { id: 11, name: 'Metapod', types: ['bug'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif' },
    { id: 12, name: 'Butterfree', types: ['bug', 'flying'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif' },
    { id: 13, name: 'Weedle', types: ['bug', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif' },
    { id: 14, name: 'Kakuna', types: ['bug', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif' },
    { id: 15, name: 'Beedrill', types: ['bug', 'poison'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif' },
    { id: 16, name: 'Pidgey', types: ['normal', 'flying'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif' },
    { id: 17, name: 'Pidgeotto', types: ['normal', 'flying'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif' },
    { id: 18, name: 'Pidgeot', types: ['normal', 'flying'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif' },
    { id: 19, name: 'Rattata', types: ['normal'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif' },
    { id: 20, name: 'Raticate', types: ['normal'], sprite: 'https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif' }
];

// DOM elements
const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonModal = new bootstrap.Modal(document.getElementById('pokemonModal'));
const modalPokemonName = document.getElementById('modalPokemonName');
const modalPokemonImage = document.getElementById('modalPokemonImage');
const modalPokemonTypes = document.getElementById('modalPokemonTypes');
const modalPokemonNumber = document.getElementById('modalPokemonNumber');

// Generate Pokemon cards
function generatePokemonCards() {
    pokemonGrid.innerHTML = '';
    
    pokemonData.forEach((pokemon, index) => {
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-6 fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const typeBadges = pokemon.types.map(type => 
            `<span class="type-badge type-${type}">${type}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="pokemon-card h-100 p-4 text-center" onclick="showPokemonModal(${pokemon.id})">
                <div class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</div>
                <img src="${pokemon.sprite}" alt="${pokemon.name}" class="pokemon-image mb-3" loading="lazy">
                <h5 class="pokemon-name">${pokemon.name}</h5>
                <div class="pokemon-types">
                    ${typeBadges}
                </div>
            </div>
        `;
        
        pokemonGrid.appendChild(card);
    });
}

// Show Pokemon modal with details
function showPokemonModal(pokemonId) {
    const pokemon = pokemonData.find(p => p.id === pokemonId);
    if (!pokemon) return;
    
    modalPokemonName.textContent = pokemon.name;
    modalPokemonImage.src = pokemon.sprite;
    modalPokemonImage.alt = pokemon.name;
    modalPokemonNumber.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    
    const typeBadges = pokemon.types.map(type => 
        `<span class="type-badge type-${type}">${type}</span>`
    ).join('');
    modalPokemonTypes.innerHTML = typeBadges;
    
    pokemonModal.show();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<div class="loading"></div> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 117, 190, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    generatePokemonCards();
    
    // Observe elements for animations
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Add some fun interactions
document.addEventListener('keydown', function(e) {
    // Easter egg: Press 'P' to show a random Pokemon
    if (e.key.toLowerCase() === 'p' && !document.querySelector('.modal.show')) {
        const randomPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
        showPokemonModal(randomPokemon.id);
    }
});

// Add hover sound effect simulation (visual feedback)
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.pokemon-card')) {
        e.target.closest('.pokemon-card').style.transform = 'translateY(-10px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.pokemon-card')) {
        e.target.closest('.pokemon-card').style.transform = '';
    }
});

// Make the showPokemonModal function globally accessible
window.showPokemonModal = showPokemonModal;

