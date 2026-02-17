import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });

  // Testimonials
  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Modern Luxury Apartment",
      description: "A complete renovation of a 3-bedroom apartment focusing on minimalist aesthetics and premium materials.",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
      featured: true
    });
    await storage.createProject({
      title: "Corporate Office Lounge",
      description: "Designing a welcoming and sophisticated lounge area for a high-end law firm.",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      featured: true
    });
    await storage.createProject({
      title: "Coastal Villa",
      description: "Interior design for a beachfront villa, blending luxury with natural elements.",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      featured: true
    });
    await storage.createProject({
      title: "Boutique Hotel Lobby",
      description: "A grand entrance design for a boutique hotel in the city center.",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000&auto=format&fit=crop",
      featured: false
    });
    await storage.createProject({
      title: "Penthouse Suite",
      description: "Luxury penthouse design with panoramic views and bespoke furniture.",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop",
      featured: true
    });
    await storage.createProject({
      title: "Minimalist Studio",
      description: "Maximizing space and style in a modern city studio apartment.",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
      featured: false
    });
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await storage.createTestimonial({
      name: "Anita Sharma",
      role: "Homeowner",
      content: "Sri Sai Interiors transformed our home completely. The attention to detail and the quality of materials used were outstanding. Highly recommended!",
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg"
    });
    await storage.createTestimonial({
      name: "Rahul Verma",
      role: "Business Owner",
      content: "Professional, creative, and timely. Rajarajan understood our vision for the office and delivered beyond our expectations.",
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    });
    await storage.createTestimonial({
      name: "Priya Menon",
      role: "Architect",
      content: "As an architect, I appreciate their design sensibility and execution capabilities. A true luxury experience.",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg"
    });
  }
}
