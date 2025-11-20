from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)
pipe.to("cuda")  # ou "cpu"

import json
from PIL import Image

with open("cartes.js", "r") as f:
    cartes = json.load(f)

for carte in cartes:
    prompt = carte["illustration"]
    image = pipe(prompt).images[0]
    image.save(f"card_{carte['id']}.png")
    print(f"Carte {carte['id']} générée !")