import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

export interface DjangoImageResponse {
    id: number;
    user_id: string;
    product_id: string;
    url: string;
    is_main: boolean;
    created_at: string;
}

export interface DjangoUploadResponse {
    main_image: DjangoImageResponse | null;
    variant_images: DjangoImageResponse[];
}

@Injectable({
    providedIn: 'root'
})
export class DjangoImageService {
    private readonly apiUrl = environment.django.apiUrl;

    /**
     * Upload des images vers votre API Django
     */
    async uploadImages(
        userId: string,
        productId: string,
        mainImage?: File,
        variantImages: File[] = []
    ): Promise<DjangoUploadResponse> {

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('product_id', productId);

        if (mainImage) {
            formData.append('main_image', mainImage);
        }

        variantImages.forEach((file) => {
            formData.append('variant_images', file);
        });

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Erreur HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error: any) {
            console.error('Erreur upload images Django:', error);
            throw new Error(`Échec de l'upload: ${error.message}`);
        }
    }

    /**
     * Récupérer les images d'un produit
     */
    async getProductImages(userId: string, productId: string): Promise<DjangoImageResponse[]> {
        try {
            const response = await fetch(`${this.apiUrl}/?user_id=${userId}&product_id=${productId}`);
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            return await response.json() || [];
        } catch (error) {
            console.error('Erreur récupération images:', error);
            throw error;
        }
    }

    /**
     * Supprimer une image
     */
    async deleteImage(imageId: number): Promise<void> {
        try {
            const response = await fetch(`${this.apiUrl}/${imageId}/`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
        } catch (error) {
            console.error('Erreur suppression image:', error);
            throw error;
        }
    }

    /**
     * Définir une image comme principale
     */
    async setAsMain(imageId: number): Promise<DjangoImageResponse> {
        try {
            const response = await fetch(`${this.apiUrl}/${imageId}/set_as_main/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur set as main:', error);
            throw error;
        }
    }
}
