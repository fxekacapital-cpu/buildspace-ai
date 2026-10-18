export interface Project {
  id: string;
  title: string;
  prompt: string;
  code: string;
  createdAt: string;
}

export interface GenerateRequest {
  prompt: string;
}

export interface GenerateResponse {
  success: boolean;
  code: string;
  projectId: string;
}
