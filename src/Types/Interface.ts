import { ReactNode } from "react";

export interface ModalProps{
    children : ReactNode,
    onClose : () => void,
}

export interface LoginFormProps {
    onClose : () => void
}

export interface SigninSlice {
    isSigninClicked : boolean
}

export interface SigninSelector{
    signIn : SigninSlice
}

export interface ScrollRef{
    refDetails : React.RefObject<HTMLDivElement | null>
}

export interface ResAndCue{
    text:string,
    link:string
}

export interface ResAndCueButtons {
    restAndCueList:ResAndCue[]
    isShowMoreEnabled: boolean
}

export interface UseFetch{
    url: string
}

export interface UseFetchResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null
    
}

export interface UseFetchResponseSlice {
    searchData: [];
    popularCuisinesData:[];
    loading: boolean;
    error: string | null
    
}

export interface CardsData {
    data: {
        cards: any[]; 
    };
}

export interface PopularCuisineList{
    selectedDish : string
}


export interface Marketplace {
    marketplaceId: string;
    businessLineId: string;
  }
  
 export interface CTA {
    text: string;
    type: string;
    link: string;
  }
  
  export interface Item {
    text: string;
    highlightedText: string;
    type: string;
    suggestionType: string;
    marketplace: Marketplace;
    tagToDisplay: string;
    tagToDisplayColor: string;
    cloudinaryId: string;
    metadata: string;
    cta: CTA;
    category: string;
    categoryColor: string;
    subCategory: string;
    subCategoryColor: string;
    restaurantId?: number;
    disabled?: boolean;
  }
  
  export interface SuggestionsProps {
    cuisinesData: Item[];
  }
  
