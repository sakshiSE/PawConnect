INSERT INTO places (name,type,city,address,description,phone) VALUES
('PawCare Veterinary Clinic','vet','Pune','Aundh, Pune','General veterinary care and emergency guidance.','020-4000-1000'),
('Happy Tails Animal Hospital','vet','Pune','Baner, Pune','Small-animal veterinary services.','020-4000-2000'),
('Paws & Coffee','cafe','Pune','Koregaon Park, Pune','Animal-friendly café with an outdoor pet area.','020-4000-3000'),
('Whiskers Corner','cafe','Pune','Kothrud, Pune','Pet-friendly café for relaxed visits.','020-4000-4000')
ON CONFLICT DO NOTHING;

INSERT INTO care_guides (animal_type,title,category,content) VALUES
('Dog','Daily Dog Care Basics','Care','Fresh water, balanced food, regular exercise, grooming, vaccinations and routine veterinary checks are important for a healthy dog.'),
('Cat','Daily Cat Care Basics','Care','Provide fresh water, suitable food, a clean litter area, safe hiding spaces, play and regular veterinary care.'),
('Dog','Foods to Avoid','Food','Avoid chocolate, onions, garlic, grapes, raisins, alcohol and xylitol. If an animal may have eaten something harmful, contact a veterinarian promptly.'),
('Cat','Foods to Avoid','Food','Avoid chocolate, onions, garlic, grapes, raisins, alcohol and foods containing xylitol. Do not use human medicine unless a veterinarian specifically advises it.'),
('Dog','Simple Do and Don’t List','Do & Don’t','DO provide shade, water and identification. DO use safe restraint outdoors. DON’T give unknown medicines or leave an animal in a hot vehicle.'),
('Cat','Simple Do and Don’t List','Do & Don’t','DO keep windows and balconies safe. DO provide clean litter and water. DON’T give human medicine or force unfamiliar food.')
ON CONFLICT DO NOTHING;
