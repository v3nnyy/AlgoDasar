export type ViewMode = 'home' | 'materi' | 'latihan';

export type InteractiveActivityType =
  | 'algorithm-order'
  | 'characteristics-match'
  | 'flowchart-symbols'
  | 'pseudocode-order'
  | 'datatype-sorter';

export interface Subtopic {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: {
      type: 'info' | 'tip' | 'warning' | 'analogy';
      title: string;
      text: string;
    };
    diagramType?: 'algorithm-flow' | 'knuth-grid' | 'flowchart-shapes' | 'pseudocode-structure' | 'memory-boxes';
    codeExample?: {
      language: string;
      filename?: string;
      code: string;
      explanation?: string;
    };
  }[];
  youtubeVideo?: {
    videoId: string;
    title: string;
    description: string;
    channelName: string;
    alternativeVideos?: {
      videoId: string;
      title: string;
      channelName: string;
    }[];
  };
  interactiveActivity?: InteractiveActivityType;
}

export interface Material {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  color: string;
  subtopics: Subtopic[];
}

export type QuizType = 'mcq' | 'case_study';

export interface QuizQuestion {
  id: number;
  materialId: number;
  materialTitle: string;
  question: string;
  contextSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedSubtopic: string;
}

export interface QuizSessionResult {
  quizType: QuizType;
  totalQuestions: number;
  score: number;
  correctCount: number;
  wrongCount: number;
  wrongMaterialIds: number[];
  userAnswers: {
    questionId: number;
    selectedIndex: number;
    isCorrect: boolean;
  }[];
}
