# ----------------------------
# Stage 1: Build React frontend
# ----------------------------
FROM node:20-alpine AS frontend
WORKDIR /frontend

COPY student-management-frontend/package*.json ./
RUN npm install

COPY student-management-frontend/ ./
RUN npm run build

# ----------------------------
# Stage 2: Build Spring Boot backend
# ----------------------------
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

COPY src ./src

# Copy frontend build output into Spring Boot static folder
COPY --from=frontend /frontend/dist/ src/main/resources/static/

RUN ./mvnw clean package -DskipTests

EXPOSE 8080
CMD ["java", "-jar", "target/StudentManagmentSystem-0.0.1-SNAPSHOT.jar"]
