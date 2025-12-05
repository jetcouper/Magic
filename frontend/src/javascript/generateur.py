# from diffusers import StableDiffusionPipeline
# import torch

# pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)
# pipe.to("cuda")  # ou "cpu"

# import json
# from PIL import Image

# with open("cartes.js", "r", encoding="utf-8") as f:
#     cartes = json.load(f)

# for carte in cartes:
#     prompt = carte["illustration"]
#     image = pipe(prompt).images[0]
#     image.save(f"card_{carte['id']}.png")
#     print(f"Carte {carte['id']} générée !")

import openai
import json
import base64

# Met ta clé OpenAI ici
openai.api_key = "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"

# Charger le JSON des cartes
with open("cartes.js", "r", encoding="utf-8") as f:
    cartes = json.load(f)

for carte in cartes:
    prompt = carte["illustration"]

    # Génération image avec DALL·E
    response = openai.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size="1024x1024"
    )

    image_base64 = response.data[0].b64_json
    image_bytes = base64.b64decode(image_base64)

    # Sauvegarde
    with open(f"card_{carte['id']}.png", "wb") as img_file:
        img_file.write(image_bytes)

    print(f"Carte {carte['id']} générée !")