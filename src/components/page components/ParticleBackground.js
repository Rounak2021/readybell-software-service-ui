import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './index.css'; // Assuming you have some CSS file for styling

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, particles, particleSystem;
        const mount = mountRef.current;

        // Initialize scene, camera, and renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Create particle geometry and material
        particles = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 1000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
        }
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
            blending: THREE.AdditiveBlending,
            transparent: true,
        });

        // Create the particle system
        particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Set the camera position
        camera.position.z = 100;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="three-js-container" style={{ position: 'absolute', width: '96%', height: '100%', zIndex: 0 }} />;
};

const Background = () => {
    return (
        <ParticleBackground />
    );
};

export default Background;
